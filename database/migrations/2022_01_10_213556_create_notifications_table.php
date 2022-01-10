<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotificationsTable extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('notifications', function (Blueprint $table){
            $table->id();
            $table->bigInteger('to_id')->unsigned();
            $table->bigInteger('from_id')->unsigned()->nullable()->default(null); //null = Notification from the system
            $table->text('text')->nullable()->default(null);
            $table->enum('type', ['primary', 'alert', 'success', 'danger', 'warning']);
            $table->boolean('read')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::dropIfExists('notifications');
    }
}
