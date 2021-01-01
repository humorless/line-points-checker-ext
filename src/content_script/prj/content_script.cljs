(ns prj.content-script
  (:require-macros [chromex.support :refer [runonce]])
  (:require [prj.content-script.core :as core]))

(runonce
  (core/init!))
