<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model{
    use HasFactory;

    //Relationships
    public function default_users(){
        return $this->hasMany(User::class, 'default_role_id');
    }
}
