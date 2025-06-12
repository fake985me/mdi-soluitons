<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categoryId = [1,2,3,4,5,6,7,8,9];

        return [
            'name' =>'Product',
            'category_id' => $categoryId[random_int(0,8)],
            'short_text' => $categoryId[random_int(0,8)].' product',
            'price' => random_int(10,50),
            'qty' => 1,
            'status' => '1',
            'content' => 'Product Description',
        ];
    }
}
