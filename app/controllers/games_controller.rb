class GamesController < ApplicationController
	def show
		@game = Game.find(params[:id])
		@rankings =@game.rankings.order('rankings.score DESC')
	end
	def play
		@game = Game.find(params[:id])
	end
	def save_score
		@game=Game.find(params[:id])
		@player=@game.rankings.find_by user_id: current_user.id
		if @player
			if @player.score<params[:score].to_i
				@player.score=params[:score].to_i
				@player.save
			end
		else
		@game.rankings.create(user: current_user,score:params[:score])	
		end
		# @game.rankings.create(user: current_user,score:params[:score])
		# render :js => "window.location='/'"
		
	end
end
