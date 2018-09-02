class RecipeSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :title, :description, :instruction, :updated_at, :image

  has_many :ingredients

  def updated_at
    object.updated_at.to_date
  end

  def image
    return unless object.image.attached?

    object.image.blob.attributes
          .slice('filename', 'byte_size')
          .merge(url: image_url)
  end

  def image_url
    url_for(object.image)
  end
end
