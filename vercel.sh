#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_REF" == "develop" || "$VERCEL_GIT_COMMIT_REF" == "main" ]]; then
  # Proceed with the build
  echo "✅ - Build can proceed $VERCEL_GIT_COMMIT_REF"
  exit 1

else
  # Don't build
  echo "🛑 - Build cancelled $VERCEL_GIT_COMMIT_REF"
  exit 0
fi
