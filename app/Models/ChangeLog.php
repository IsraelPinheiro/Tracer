<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChangeLog extends Model{
    use HasFactory;

    //Disable updated_at
    const UPDATED_AT = null;
    
    //Relationships
    //An Change Log can belong to a Attachment, Comment, Profile, Project, Role, Task, Task Type, Task Template, Ticket, Ticket Type, Ticket Template or User
    public function loggable(){
        return $this->morphTo();
    }
}
