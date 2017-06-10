class Api::V1::GenresController < ApplicationController
    before_action :set_genre, only: [:show, :update]

    def index
        @genres = Genre.all
        render json: @genres
    end

    def show
        render json: @genre
    end

    def create
        @genre = Genre.new(genre_params)
        if @genre.save
            render json: @genre
        else
            puts "Genres Controller: Failed to Create"
        end
    end

    def update
        if @genre.update(genre_params)
            render json: @genre
        else
            puts "Genres Controller: Failed to update Genre"
        end
    end

    def delete
        @genre = Genre.find(params[:genre_id])
        @genre.destroy
    end
        
    private

    def set_genre
        @genre = Genre.find(params[:id])
    end

    def genre_params
        params.require(:genre).permit(:id, :name)
    end
end