<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('projects', function (Blueprint $table){
            $table->id();
            $table->string('name');
            $table->text('description')->nullable()->default(null);
            $table->bigInteger('manager_id')->unsigned();
            $table->bigInteger('owner_id')->unsigned()->nullable()->default(null);
            $table->string('project_repository')->nullable()->default(null);
            $table->string('project_page')->nullable()->default(null);
            $table->timestamps();
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
        Schema::dropIfExists('projects');
    }
}
