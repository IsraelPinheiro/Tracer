<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaskTypesTable extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('task_types', function (Blueprint $table){
            $table->id();
            $table->string('name')->unique();
            $table->text('description')->nullable()->default(null);
            $table->bigInteger('icon_id')->unsigned()->nullable()->default(null); //Null = Default
            $table->string('color',6)->nullable()->default(null);
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
        Schema::dropIfExists('task_types');
    }
}
