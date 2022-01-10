<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('profiles', function (Blueprint $table){
            $table->id();
            $table->string('name')->unique();
            $table->text('description')->nullable()->default(null);
            $table->boolean('assignable_as_manager')->default(false);   //Can be assigned as project Manager
            $table->boolean('assignable_as_owner')->default(false);     //Can be assigned as project Owner
            //ACLs
            $table->json('acl_projects');           //Create | Read | Update | Delete Projects
            $table->json('acl_templates_tickets');  //Create | Read | Update | Delete Ticket Templates
            $table->json('acl_templates_tasks');    //Create | Read | Update | Delete Task Templates
            $table->json('acl_types_tickets');      //Create | Read | Update | Delete Ticket Types
            $table->json('acl_types_tasks');        //Create | Read | Update | Delete Task Types

            $table->json('acl_users');              //Create | Read | Update | Delete Users
            $table->json('acl_profiles');           //Create | Read | Update | Delete User Profiles
            $table->json('acl_roles');              //Create | Read | Update | Delete Roles

            $table->json('acl_change_logs');        //Read | Download Change Logs
            $table->json('acl_access_logs');        //Read | Download Access Logs

            $table->json('acl_settings');            //Read | Update System Settings

            $table->timestamps();   //created_at and updated_at
            $table->softDeletes();  //deleted_at
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
        Schema::dropIfExists('profiles');
    }
}
