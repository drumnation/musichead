require_relative 'required'
require_relative 'token'

def request(uri)
    request = Net::HTTP::Get.new(uri)
    request["Accept"] = "application/json"
    request["Authorization"] = "Bearer #{TOKEN}"
    req_options = { use_ssl: uri.scheme == "https" }
    Net::HTTP.start(uri.hostname, uri.port, req_options) {|http| http.request(request)}
end