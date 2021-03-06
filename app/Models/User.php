<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    //Relationships
    //User's Profile
    public function profile(){
        return $this->belongsTo(Profile::class);
    }
    //User's Default Role
    public function default_role(){
        return $this->belongsTo(Role::class, 'default_role_id');
    }
    //User's Owned Projects
    public function owned(){
        return $this->hasMany(User::class, 'owner_id');
    }
    //User's Managed Projects
    public function managed(){
        return $this->hasMany(User::class, 'manager_id');
    }
    //User's system access
    public function accesses(){
        return $this->hasMany(AccessLog::class);
    }
    public function lastAccess(){
        return $this->hasOne(AccessLog::class)->latest();
    }
    //User's activity log
    public function logs(){
        return $this->morphMany(ChangeLog::class, 'loggable');
    }
    //Notifications
    public function notifications_to(){
        return $this->hasMany(Notification::class, 'from_id');
    }
    public function notifications_from(){
        return $this->hasMany(Notification::class, 'to_id');
    }
    public function unread_notifications(){
        return $this->hasMany(Notification::class, 'to_id')->where('read', false)->get();
    }
}
