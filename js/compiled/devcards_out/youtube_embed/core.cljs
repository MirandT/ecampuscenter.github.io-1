(ns youtube-embed.core
  (:require
    #_[om.core :as om :include-macros true]
    [reagent.core :as r]
    [sablono.core :as sab :include-macros true]
    [clojure.string :as cs]
    )
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defonce first-example-state (atom {:yourl "https://youtube.com/watch?v=2FpW1ctrDHE"}))


(defcard
  "*BlackBoard HTML Generator*")

(defn gcd
  "(gcd a b) computes the greatest common divisor of a and b. for ratio http://rosettacode.org/wiki/Greatest_common_divisor#Clojure"
  [a b]
  (if (zero? b)
    a
    (recur b (mod a b))))

(defn calc-bmi [bmi-data]
  (let [{:keys [height width bmi yurl] :as data} bmi-data
        h (/ height 100)]
    (if (nil? bmi)
      (assoc data :bmi (/ (/ width (gcd width height) (/ height (gcd width height) )) ))
      (assoc data :width (* bmi h h)))
    ;   (assoc data :yurl yurl)
    )

  )

(defn slider [bmi-data param value min max]
  (sab/html
    [:input {:type      "text" :value value :min min :max max
             :style     {:width "100%"}
             :on-change (fn [e]
                          (swap! bmi-data assoc param (.-target.value e))
                          (when (not= param :bmi)
                           (swap! bmi-data assoc :bmi nil)
                          )
    )}]))


(defn ifriendly [url]
  "create iframible youtube link for display http://stackoverflow.com/questions/20498831/refused-to-display-in-a-frame-because-it-set-x-frame-options-to-sameorigin"
  (cs/replace-first (cs/replace-first url "watch?v=" "embed/") "https:" "")
  )

(defn fluff [skinny width height length]
  (str "<p>Click the <strong>Play</strong> icon to begin.</p>
<p><iframe width=\"" width "\" height=\""height "\" src=\"" (ifriendly skinny) "\" frameBorder=\"0\" allowfullscreen></iframe></p>
<p>If video doesn't appear, follow this direct link:
<a href=\"" skinny  "\" title=\"Video\" target=\"_blank\">"
skinny "</a> (" length ")</p><p>To display video captions, start video and click <strong>CC</strong> in the video frame. To expand the video, use direct link above to open video in YouTube.</p>
")
  )


(defn htmlout [bmi-data param value width height min max length]
  (sab/html

    #_[:textarea {
                :cols  50
                :rows  10
                :name  "title"
                :id    "title"
                :color "#333333"
                :value (bmi-data :yurl yurl)}]


    [:textarea {:cols max
                :rows min
                :value (fluff value width height length)
                :style     {:width "100%"}
                :on-change (fn [e] (swap! bmi-data assoc param (.-target.value e))
                          (when (not= param :bmi)
                            (swap! bmi-data assoc :bmi nil)
                            )
                          )}]

    #_[:input {:type      "text" :value value :min min :max max
             :style     {:width "100%"}
             :on-change (fn [e]
                          (swap! bmi-data assoc param (.-target.value e))
                          (when (not= param :bmi)
                            (swap! bmi-data assoc :bmi nil)
                            )
                          )}]
    ))


(defn htmloutvisual [bmi-data param value width height min max length]
  (sab/html
    [:div
     [:p {:style {:font-size ".8em" }} "Click the "
        [:strong "Play"] " icon to begin."]
      [:iframe {:width width
                :height height
                :src (ifriendly value)
                :frameborder 0
                :allowfullscreen nil
                :on-change (fn [e] (swap! bmi-data assoc param (.-target.value e))
                             (when (not= param :bmi)
                               (swap! bmi-data assoc :bmi nil)
                               )
                             )} ]
     [:p {:style {:font-size ".8em" }} "If video doesn't appear, follow this direct link: "
      [:a {:href value
           :title "Video"
           :target "_blank"
           }  value ] " (" length ")"
       ]
     [:p {:style {:font-size ".8em" }} "To display video captions, start video and click " [:strong "CC"] " in the video
     frame. To expand the video, use direct link above to open video in YouTube." ]
     ]
    ))


(defn bmi-component [bmi-data]
  (let [{:keys [width height bmi yurl length]} (calc-bmi @bmi-data)
        [color diagnose] (cond
                           (and (> bmi .562) (< bmi .563)) ["green" (str "approx ratio: 16:9. exact ratio: " (/ width (gcd width height)) " by " (/ height (gcd width height)) "." )]
                           (and (> bmi .74) (< bmi .76)) ["inherit" (str "approx ratio: 4:3. exact ratio: " (/ width (gcd width height)) " by " (/ height (gcd width height)) "." )]
                           ; (< bmi 30) ["orange" "overweight"]
                           :else ["red" "non-standard ratio"])]
    (sab/html
      [:div
       [:h3 "Parameters"]
       [:div
        [:span (str "url: " yurl)]
        (slider bmi-data :yurl yurl 0 100)]
       [:div
        [:span (str "time: " length)]
        (slider bmi-data :length length 0 100)]
       [:div
        [:span (str "width: " (int width) "px")]
        (slider bmi-data :width width 30 150)]
       [:div
        [:span (str "height: " (int height) "px")]
        (slider bmi-data :height height 100 220)]
       [:div
        [:span (str "ratio: " (cljs.pprint/cl-format nil "~,3f" bmi) " ")]
        [:span {:style {:color color}} diagnose]
        (slider bmi-data :bmi bmi 10 50)]
       [:div
        [:span ( str "html")]
        (htmlout bmi-data :yurl yurl width height 10 50 length)
        ]
       [:div
        [:span ( str "preview")]
        (htmloutvisual bmi-data :yurl yurl width height 10 50 length)
        ]
       ])))

(defcard YouTube
         ;"see [devcards](https://github.com/bhauman/devcards) for deets"
  (fn [data-atom _] (bmi-component data-atom))
  {:height 360 :width 640 :yurl "https://youtube.com/watch?v=2FpW1ctrDHE" :length "3m 45s"}
  {:inspect-data true
   :frame        true
   :history      true
   :heading      true
   })


(
;(defn atom-input [value]
;  [:input {:type      "text"
;           :value     @value
;           :on-change #(reset! value (-> % .-target .-value))}])


#_(defn atom-input [value]
    (sab/html [:input {:type      "text"
                       :value     @value
                       :on-change #(reset! value (-> % .-target .-value))}]))

#_(defn shared-state []
    (let [val (r/atom "foo")]
      (fn []
        (sab/html [:div
                   [:p "The value is now: " @val]
                   [:p "Change it here: " [atom-input val]]])))
    )

#_(defcard shared-state-card
           (fn [data-atom owner]
             (sab/html [:div
                        [:p "The value is now: " (:yourl @data-atom)]
                        [:p "Change it here: " [atom-input :yourl]]])) first-example-state)


#_(defcard
    (fn [data-atom owner]
      (sab/html
        [:div
         [:h2 "Example: fn that returns React"]
         (prn-str data-atom)
         (prn-str owner)
         ()])))

#_(defcard
    (fn [data-atom owner]
      (sab/html
        [:div
         [:h3 "Example Counter w/Initial Data: " (:yourl @data-atom)]
         [:button
          {:onClick (fn [] [atom-input data-atom])}
          "inc"]]))
    first-example-state)



#_(defn atom-input [value]
    [:input {:type      "text"
             :value     @value
             :on-change #(reset! value (-> % .-target .-value))}])


#_(defcard value-to-change
           "enter youtube url"
           (fn [data-atom owner]
             (sab/html
               [:input {:type      "text"
                        :size      44
                        :value     (:yourl @first-example-state)
                        :on-change [atom-input first-example-state]}]
               )

             )
           )

#_(defn shared-state []
    (let [val (atom "foo")]
      (fn []
        [:div
         [:p "The value is now: " @val]
         [:p "Change it here: " [atom-input val]]])))







#_(defcard hmm [atom-input 3])

#_(defcard value-to-change
           "enter youtube url"
           (fn [data-atom owner]
             (sab/html
               [:input {:type  "text"
                        :size  44
                        :value (:yourl @first-example-state)
                        }]

               )
             )
           )

#_(defcard shared-state
           (fn [data-atom owner]
             (sab/html
               [:div
                [:p "The value is now: " (:yourl @first-example-state)]
                [:p "Change it here: " [atom-input data-atom]]])))



#_(defcard youtube-url                                      ; main obj
           (fn [data-atom _] (cant-i-name-this-anything data-atom))
           {:maiurl "init"}
           {:inspect-data true
            :heading      true}
           #_(sab/html
               [:input
                {:type  "text"
                 :value "initial"}]
               )                                            ; initial data
           )                                                ; devcard options: forces header to show


#_(defcard "Enter Youtube URL"
           (fn [data-atom owner]
             (sab/html
               [:input {:type  "text"
                        :name  "title"
                        :id    "title"
                        :value (:yourl @data-atom)}
                {:onChange (fn [] ())}]
               )) first-example-state)

#_(defcard
    (fn [data-atom owner]
      (sab/html
        [:button
         {:onClick (fn [] (swap! data-atom update-in [:yourl] inc))}
         "update"])) first-example-state)


#_(defcard
    (fn [data-atom owner]
      (sab/html
        [:button
         {:onClick (fn [] (swap! data-atom update-in [:yourl] inc (-> % .-target .-value))
                     )}
         "update"])) first-example-state)
  )

#_(defcard
  HTML
  (fn [data-atom owner]
    (sab/html

      [:textarea {
                  :cols  50
                  :rows  10
                  :name  "title"
                  :id    "title"
                  :color "#333333"
                  :value (:yourl @data-atom)}]

      )) first-example-state)

#_(defcard
  HTML2
  (fn [data-atom owner]
    (sab/html

      [:textarea {
                  :cols  50
                  :rows  10
                  :name  "title"
                  :id    "title"
                  :color "#333333"
                  :value (:rows @data-atom)}]

      )) {:rows 4444}
  {:inspect-data true
   :frame        true
   :history      true
   })



#_(defcard
    (sab/html
      [:input {:type "text", :name "title", :id "title", :value nil}]))


(defn main []
  ;; conditionally start the app based on wether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

