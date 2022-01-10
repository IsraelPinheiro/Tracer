<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){
        DB::table('users')->delete();
        User::create([
            'name' => 'Administrador',
            'email' => 'admin@tracer.com.br',
            'password' => Hash::make('admin'),
            'profile_id' => 1,
            'created_by' => 1
        ]);
        $this->command->info('User Administrador created');

        User::create([
            'name' => 'Usuário',
            'email' => 'user@tracer.com.br',
            'password' => Hash::make('user'),
            'profile_id' => 2,
            'created_by' => 1
        ]);
        $this->command->info('User Usuário created');
    }
}
