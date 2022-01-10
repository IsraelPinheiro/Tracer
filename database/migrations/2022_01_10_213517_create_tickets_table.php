<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketsTable extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('tickets', function (Blueprint $table){
            $table->id();
			$table->string('title');
			$table->text('description');
			$table->text('solution')->nullable()->default(null);
			$table->bigInteger('project_id')->unsigned();
			$table->bigInteger('author_id')->unsigned();
			//Priority Matrix : Priority = Likelihood X Severity = Very Low, Low, Moderate, High, Critical
			$table->smallInteger('likelihood');	//Very Low:1, Low:2,  Medium:3, High:4, Very High:5
			$table->smallInteger('severity');	//Very Low:1, Low:2,  Medium:3, High:4, Critical:5
			$table->smallInteger('status');		//New:1, Assigned:2, In Progress:3, Pending:4, On-hold:5, Solved:6, Closed:7
			$table->smallInteger('type_id');
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
        Schema::dropIfExists('tickets');
    }
}
