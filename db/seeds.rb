# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

green_smoothie_bowl = Recipe.create(
  title: 'Green rainbow smoothie bowl',
  description: 'Start as you mean to go on with this super-healthy breakfast bowl of berries and avocado',
  instructions: 'Put the spinach, avocado, mango, apple and almond milk in a blender, and blitz until smooth and thick. Divide between two bowls and top with the dragon fruit and berries.'
)

green_smoothie_bowl.ingredients.create([
  { description: '50g spinach' },
  { description: '1 avocado, stoned, peeled and halved' },
  { description: '1 ripe mango, stoned, peeled and cut into chunks' },
  { description: '1 apple, cored and cut into chunks' },
  { description: '200ml almond milk' },
  { description: '1 dragon fruit, peeled and cut into even chunks' },
  { description: '100g mixed berries' }
])

berry_oats = Recipe.create(
  title: 'Berry oats',
  description: 'Overnight oats that are low in fat and take 5 minutes to prepare. Pack your breakfast with frozen raspberries, bio yogurt and golden linseeds for a delicious and healthy start to the day',
  instructions: 'Tip the oats and seeds into a bowl, and pour over 200ml boiling water and stir well. Add the bananas and three-quarters of the raspberries (chill the remainder), mash together, then cover and chill overnight.
                The next day, layer the raspberry oats in two tumblers or bowls with the yogurt, top with the reserved raspberries and serve.'
)

berry_oats.ingredients.create([
  { description: '70g porridge oats' },
  { description: '2 tbsp golden linseeds' },
  { description: '2 ripe bananas' },
  { description: '140g frozen raspberries' },
  { description: '175g natural yogurt' }
])
