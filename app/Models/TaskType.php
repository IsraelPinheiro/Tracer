<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskType extends Model{
    use HasFactory;

    //Relationships
    //Type's Tasks
    public function tasks(){
        return $this->hasMany(Task::class);
    }
}
