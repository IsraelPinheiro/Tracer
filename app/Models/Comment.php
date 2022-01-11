<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model{
    use HasFactory;

    //Relationships
    //A Comment can belong to a Ticket or Task
    public function commentable(){
        return $this->morphTo();
    }
}
