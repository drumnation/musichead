class MessagesChannel < ApplicationCable::Channel
    def subscribed # when 
        stream_from 'messages'
    end
end