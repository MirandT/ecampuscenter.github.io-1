(ns youtube-embed.core
  (:require
    #_[om.core :as om :include-macros true]
    [reagent.core :as r]
    [sablono.core :as sab :include-macros true])
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defonce first-example-state (atom {:yourl "http://youtube.com/watch?v=2FpW1ctrDHE"}))


  (defcard
    "*Youtube to BlackBoard HTML Generator*")



(defn calc-bmi [bmi-data]
  (let [{:keys [height width bmi yurl] :as data} bmi-data
        h (/ height 100)]
    (if (nil? bmi)
      (assoc data :bmi (/ width (* h h)))
      (assoc data :width (* bmi h h)))
      (assoc data :yurl yurl)
    )

      )

(defn slider [bmi-data param value min max]
  (sab/html
    [:input {:type "text" :value value :min min :max max
             ; :style {:width "100%"}
             :on-change (fn [e]
                          (swap! bmi-data assoc param (.-target.value e))
                          (when (not= param :bmi)
                            (swap! bmi-data assoc :bmi nil)
                            )
                          )}]))

(defn bmi-component [bmi-data]
  (let [{:keys [width height bmi yurl]} (calc-bmi @bmi-data)
        [color diagnose] (cond
                           (< bmi 18.5) ["orange" "underweight"]
                           (< bmi 25) ["inherit" "normal"]
                           (< bmi 30) ["orange" "overweight"]
                           :else ["red" "obese"])]
    (sab/html
      [:div
       [:h3 "YouTube Parameters"]
       [:div
        [:span (str "width: " (int width) "px")]
        (slider bmi-data :width width 30 150)]
       [:div
        [:span (str "height: " (int height) "px")]
        (slider bmi-data :height height 100 220)]
        [:div
        [:span (str "url: "  yurl)]
        (slider bmi-data :yurl yurl 0 100)]
       [:div
        [:span (str "BMI: " (int bmi) " ")]
        [:span {:style {:color color}} diagnose]
        (slider bmi-data :bmi bmi 10 50)]])))

(defcard
         "see [devcards](https://github.com/bhauman/devcards) for deets"
         (fn [data-atom _] (bmi-component data-atom))
         {:height 480 :width 853 :yurl 10}
         {:inspect-data true
          :frame true
          :history true
          })


  #_(defn atom-input [value]
      [:input {:type      "text"
               :value     @value
               :on-change #(reset! value (-> % .-target .-value))}])


#_(defn atom-input [value]
  (sab/html [:input {:type "text"
           :value @value
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
                 [:p "The value is now: "(:yourl @data-atom)]
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
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])


#_(defcard value-to-change
         "enter youtube url"
         (fn [data-atom owner]
           (sab/html
             [:input {:type      "text"
                      :size 44
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
             [:input {:type "text"
                      :size 44
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

(defcard
  example-counter
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

