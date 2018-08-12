class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :instruction, :updated_at

  has_many :ingredients

  def updated_at
    object.updated_at.to_date
  end
end
