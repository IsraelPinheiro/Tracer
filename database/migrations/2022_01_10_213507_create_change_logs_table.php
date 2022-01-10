<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChangeLogsTable extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('change_logs', function (Blueprint $table){
            $table->id();
            $table->bigInteger('user_id')->unsigned();
            //Polymorphic relation
            $table->string('loggable_type');
            $table->bigInteger('loggable_id')->unsigned();
            $table->enum('action', ['create', 'read', 'update', 'delete']);
            $table->json('old_data')->nullable()->default(null);
            $table->timestamp('created_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::dropIfExists('change_logs');
    }
}
