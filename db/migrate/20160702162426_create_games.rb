class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title
      t.string :genre
      t.string :instructions
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
