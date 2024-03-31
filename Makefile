## DO NOT EDIT!
# This file was provisioned by OpenTofu
# File origin: https://github.com/aetheric-oss/tofu-github/tree/main/src/modules/vars/templates/nuxt/all/Makefile.tftpl

DOCKER_NAME := arrow-web-aetheric-public

help: .help-base .help-cspell .help-markdown .help-editorconfig .help-commitlint

include .make/base.mk
include .make/cspell.mk
include .make/markdown.mk
include .make/editorconfig.mk
include .make/commitlint.mk

test: cspell-test md-test-links editorconfig-test
