#! /usr/bin/env node

if (!module.parent)
  console.log(require("./get_ip")())
