class CreateRankings < ActiveRecord::Migration
  def change
    create_table :rankings do |t|
      t.references :game, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true
      t.integer :score , default: 0
      t.integer :last_score

      t.timestamps null: false
    end
  end
end
