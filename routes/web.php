<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth'])->group(function () {
    Route::get('/', [AppController::class, 'index'])->name('home');
});

Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'show_login'])->name('login');
    Route::get('/register', [AuthController::class, 'show_register'])->name('register');
    Route::post('/register', [AuthController::class, 'store_register'])->name('register');
});
