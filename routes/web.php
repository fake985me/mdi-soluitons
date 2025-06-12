<?php
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AjaxController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\Frontend\PageController;
use App\Http\Controllers\Frontend\PageHomeController;
use App\Http\Controllers\Auth\LoginController; // pastikan controller login

Route::group(['middleware' => 'sitesetting'], function(){
    Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login'); // default login
    Route::post('/login', [LoginController::class, 'login']);
    
    // Route::get('/about', [PageController::class, 'about'])->name('about');
    // Route::get('/contact', [PageController::class, 'contact'])->name('contact');
    // Route::post('/contact/save', [AjaxController::class, 'contactsave'])->name('contact.save');
    // Route::get('/product', [PageController::class, 'product'])->name('product');
    // Route::get('/men/{slug?}', [PageController::class, 'product'])->name('menproduct');
    // Route::get('/women/{slug?}', [PageController::class, 'product'])->name('womenproduct');
    // Route::get('/children/{slug?}', [PageController::class, 'product'])->name('childrenproduct');
    // Route::get('/sales', [PageController::class, 'saleproduct'])->name('sale-product');
    // Route::get('/product/{slug}', [PageController::class, 'productdetail'])->name('productdetail');
    
    // Route::get('/cart', [CartController::class, 'index'])->name('cart');
    // Route::post('/cart/add', [CartController::class, 'add'])->name('cartadd');
    // Route::post('/cart/remove', [CartController::class, 'remove'])->name('cartremove');
    // Route::post('/cart/couponcheck', [CartController::class, 'couponcheck'])->name('coupon.check');
    // Route::post('/cart/newQty', [CartController::class, 'newQty'])->name('cartnewQty');
    // Route::get('/cart/form', [CartController::class, 'cartform'])->name('cart.form');
    // Route::post('/cart/save', [CartController::class, 'cartSave'])->name('cart.save');

    Auth::routes(); // pastikan sudah jalankan `php artisan ui bootstrap --auth` atau sejenisnya
    Route::get('logout', [AjaxController::class, 'logout'])->name('logout');
});

// HARUS di bagian paling akhir!
Route::get('/{any}', fn () => view('app'))->where('any', '.*')->name('app');
