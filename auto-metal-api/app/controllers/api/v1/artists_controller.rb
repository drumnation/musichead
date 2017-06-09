class Api::V1::ArtistsController < ApplicationController
    before_action :set_artist, only: [:show, :update]

    def index
        @artist = Artist.all
        render json: @artist
    end

    def show
        render json: @artist
    end

    def create
        @artist = Artist.new(album_params)
        if @artist.save
            render json: @artist
        else
            puts "Artists Controller: Failed to Create"
        end
    end

    def update
        if @artist.update(artist_params)
            render json: @artist
        else
            puts "Artists Controller: Failed to update Artist"
        end
    end

    def delete
        @artist = Artist.find(params[:artist_id])
        @artist.destroy
    end
        
    private

    def set_album
        @artist = Artist.find(params[:id])
    end

    def artist_params
        params.require(:artist).permit(
            :name,
            :popularity,
            :open,
            :followers,
            :big_image,
            :medium_image,
            :small_image,
            :related_artists,
            :albums,
            :top_tracks,
            :spotify_artist_id,
            :record_label_id
        )
    end
end