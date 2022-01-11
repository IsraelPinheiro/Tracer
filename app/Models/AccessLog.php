<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccessLog extends Model{
    use HasFactory;

    const CREATED_AT = 'accessed_at';
    public $timestamps = false;
    public function setCreatedAtAttribute($value){ 
        $this->attributes['created_at'] = \Carbon\Carbon::now(); 
    }
    protected $casts = [
        'accessed_at' => 'datetime',
    ];
    //Relationships
    //User
    public function user(){
        return $this->belongsTo(User::class);
    }
}
