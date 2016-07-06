class GamesController < ApplicationController
	def show
		@game = Game.find(params[:id])
		@rankings =@game.rankings.order('rankings.score DESC')
	end
end
