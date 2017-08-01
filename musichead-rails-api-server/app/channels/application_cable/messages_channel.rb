class MessagesChannel < ApplicationCable::Channel

    def subscribed
        stream_from 'messages'
    end

    def receive(params)
        message = Message.new(content: params["content"])
        message.user = User.first
        message.chatroom = Chatroom.first
        message.save
        ActionCable.server.broadcast('messages', MessageSerializer.new( message: message ))
    end
end