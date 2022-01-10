<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketTemplatesTable extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('ticket_templates', function (Blueprint $table){
            $table->id();
            $table->string('name')->unique();
            //Template Data
            $table->string('template_title')->nullable()->default(null);
            $table->text('template_description')->nullable()->default(null);
			//Priority Matrix : Priority = Likelihood X Severity = Very Low, Low, Moderate, High, Critical
			$table->smallInteger('template_likelihood');	//Very Low:1, Low:2,  Medium:3, High:4, Very High:5
			$table->smallInteger('template_severity');		//Very Low:1, Low:2,  Medium:3, High:4, Critical:5
			$table->smallInteger('template_type');

            $table->timestamps();
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
        Schema::dropIfExists('ticket_templates');
    }
}
