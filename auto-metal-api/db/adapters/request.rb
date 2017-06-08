require_relative 'required'
require_relative 'token'
# require 'base64'
# require 'rest-client'

def request(uri)
    request = Net::HTTP::Get.new(uri)
    request["Accept"] = "application/json"
    request["Authorization"] = "Bearer #{TOKEN}"
    req_options = { use_ssl: uri.scheme == "https" }
    Net::HTTP.start(uri.hostname, uri.port, req_options) {|http| http.request(request)}
end

# def getAuthenticationRequest(uri)
#     RestClient.get uri, {:Authorization => 'Bearer cT0febFoD5lxAlNAXHo6g'}
# end

# def postRequest
    # grant = Base64.strict_encode64("#{$client_id}:#{$client_secret}")
#     RestClient.post(
#         'https://accounts.spotify.com/api/token',
#         {'grant_type' => 'client_credentials'},
#         {"Authorization" => "Basic #{grant}"}
#     )
# end