<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksTable extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('tasks', function (Blueprint $table){
            $table->id();
			$table->string('title');
			$table->text('description');
            $table->bigInteger('project_id')->unsigned();
            $table->dateTime('deadline')->nullable()->default(null);
			$table->smallInteger('priority');   // Very Low:1, Low:2, Moderate:3, High:4, Critical:5
			$table->smallInteger('status');     //New:1, Assigned:2, In Progress:3, On-hold:4, Canceled:5, Closed:6, Declined:7

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
        Schema::dropIfExists('tasks');
    }
}
