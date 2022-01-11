<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model{
    use HasFactory;

    //Relationships
    //Project's Comments
    public function comments(){
        return $this->morphMany(Comment::class, 'commentable');
    }
    //Project's Attachments
    public function attachments(){
        return $this->morphMany(Attachment::class, 'attachable');
    }
    //Project's Owner
    public function owner(){
        return $this->belongsTo(User::class, 'owner_id');
    }
    //Projects Manager
    public function manager(){
        return $this->belongsTo(User::class, 'manager_id');
    }
}
