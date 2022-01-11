<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model{
    use HasFactory;

    //Relationships
    //Task's Type
    public function type(){
        return $this->belongsTo(TaskType::class);
    }
}
