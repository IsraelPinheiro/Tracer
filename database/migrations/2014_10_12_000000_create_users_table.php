<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('users', function (Blueprint $table){
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->bigInteger('profile_id')->unsigned();
            $table->bigInteger('default_role_id')->unsigned()->nullable()->default(null); //Default role id, can be overwritten when assigned to a project
            $table->boolean('active')->default(true);
            $table->string('password');
            $table->string('avatar')->unique()->nullable(); //null = Use default
            $table->rememberToken();
            $table->timestamps(); //created_at and updated_at
            $table->softDeletes(); //deleted_at
            $table->bigInteger('created_by')->unsigned();
            $table->bigInteger('updated_by')->unsigned()->nullable()->default(null);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::dropIfExists('users');
    }
}
