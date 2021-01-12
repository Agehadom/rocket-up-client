curl --include --request POST "https://serene-bastion-18925.herokuapp.com/sign-in" \
--header "Content-Type: application/json" \
--data '{
  "credentials": {
    "username": "'"${USERNAME}"'",
    "password": "'"${PASSWORD}"'"
  }
}'

echo
