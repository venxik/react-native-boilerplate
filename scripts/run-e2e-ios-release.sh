#!/bin/bash

yarn start &

METRO_BUNDLER_PID=$!

yarn test:e2e-ios-dev-debug

DETOX_EXIT_CODE=$?

kill $METRO_BUNDLER_PID

exit $DETOX_EXIT_CODE