#! /usr/bin/env node

if (!module.parent)
  return console.log(require("./get_ip")())
