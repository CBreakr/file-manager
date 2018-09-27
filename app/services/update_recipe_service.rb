class UpdateRecipeService
  def initialize(recipe, params)
    @recipe = recipe
    @params = params
  end

  def call
    if @params[:image].blank?
      @params.delete(:image)
      delete_image if @recipe.image.attached?
    end

    @recipe.update(@params)
  end

  private

  def delete_image
    @recipe.image.purge
  end
end
