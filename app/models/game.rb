class Game < ActiveRecord::Base
  has_many :rankings
  has_many :users , :through => :rankings

end
