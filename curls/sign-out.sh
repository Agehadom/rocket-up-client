curl --include --request DELETE "https://serene-bastion-18925.herokuapp.com/sign-out" \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"
echo
