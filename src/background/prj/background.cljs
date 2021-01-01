(ns prj.background
  (:require-macros [chromex.support :refer [runonce]])
  (:require [prj.background.core :as core]))

(runonce
  (core/init!))
