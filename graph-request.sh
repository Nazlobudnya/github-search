#!/bin/bash

curl -H "Authorization: bearer d1ac0d6e5588b3f68f094c9ed63ade6c1c252c1c" -X POST -d " \
 { \
   \"query\": \"query { viewer { login }}\" \
 } \
" https://api.github.com/graphql