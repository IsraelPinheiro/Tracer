<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model{
    use HasFactory;

    //Relationships
    //Profile's Users
    public function users(){
        return $this->hasMany(User::class);
    }
}
