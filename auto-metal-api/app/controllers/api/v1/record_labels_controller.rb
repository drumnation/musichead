class Api::V1::RecordLabelsController < ApplicationController
    before_action :set_record_label, only: [:show, :update]

    def index
        @record_labels = RecordLabel.all
        render json: @record_labels
    end

    def show
        render json: @record_label
    end

    def create
        @record_label = RecordLabel.new(record_label_params)
        if @record_label.save
            render json: @record_label
        else
            puts "Record Labels Controller: Failed to Create"
        end
    end

    def update
        if @record_label.update(record_label_params)
            render json: @record_label
        else
            puts "Record Labels Controller: Failed to update RecordLabel"
        end
    end

    def delete
        @record_label = RecordLabel.find(params[:record_label_id])
        @record_label.destroy
    end
        
    private

    def set_record_label
        @record_label = RecordLabel.find(params[:id])
    end

    def record_label_params
        params.require(:record_label).permit(:id, :name)
    end
end