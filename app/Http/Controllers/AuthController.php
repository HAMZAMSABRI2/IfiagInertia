<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * show_login
     *
     * @return void
     */
    public function show_login()
    {
        return inertia('Auth/Login');
    }

    /**
     * show_register
     *
     * @return void
     */
    public function show_register()
    {
        return inertia('Auth/Register');
    }

    public function store_register(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|min:6'
        ]);

        $user = new User();

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        Auth::login($user);

        return redirect()->route('home');
    }
}
