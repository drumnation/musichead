class MessagesController < ApplicationController

    def create
        message = Message.new(content: payload["content"])
        message.user = User.first
        message.chatroom = Chatroom.first
        # message.save
        render json: message
    end

end