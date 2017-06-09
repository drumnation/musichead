class Api::V1::AlbumsController < ApplicationController
    before_action :set_album, only: [:show, :update]

    def index
        @albums = Album.all
        render json: @albums
    end

    def show
        render json: @album
    end

    def create
        @album = Album.new(album_params)
        if @album.save
            render json: @album
        else
            puts "Albums Controller: Failed to Create"
        end
    end

    def update
        if @album.update(album_params)
            render json: @album
        else
            puts "Albums Controller: Failed to update Album"
        end
    end

    def delete
        @album = Artist.find(params[:album_id])
        @album.destroy
    end
        
    private

    def set_album
        @album = Album.find(params[:id])
    end

    def album_params
        params.require(:album).permit(
            :name,
            :popularity,
            :release_date,
            :big_image,
            :medium_image, 
            :small_image,
            :number_of_tracks,
            :open,
            :spotify_album_id,
            :record_label_id,
            :artist_id,
            :genre_id
        )
    end
end