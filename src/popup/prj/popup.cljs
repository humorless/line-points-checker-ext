(ns prj.popup
  (:require-macros [chromex.support :refer [runonce]])
  (:require [prj.popup.core :as core]))

(runonce
  (core/init!))
